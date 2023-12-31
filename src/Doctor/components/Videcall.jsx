import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Peer } from "peerjs";
import instance from "../../Axios/Axios";

const Videcall = () => {
  const [peerId, setPeerId] = useState("");
  //   const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const [inviteButtonClicked, setInviteButtonClicked] = useState(false);
  const [calling, setCalling] = useState(true)
  const [incomingCall, setIncomingCall] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const peerInstance = useRef(null);
  const remoteVideoRef = useRef(null);
  const currentVideoRef = useRef(null);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const bookingUserEmail = urlParams.get("bookinguseremail");

  console.log(bookingUserEmail, "kaaaaaaaaaaaaaiiiiiiiiiii");

  const invitePatient = () => {
    instance.get(
      `/doctors/invitingpatient?peerId=${peerId}&bookinguseremail=${bookingUserEmail}`
    );
    setInviteButtonClicked(true);
  };

  console.log(peerId, "peerId");
  useEffect(() => {
    const peer = new Peer();

    peer.on("error", (error) => {
      console.error("PeerJS error:", error);
    });

    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", (call) => {
      setIncomingCall(call);
    });

    peerInstance.current = peer;
  }, []);

  const acceptCall = () => {
    setCalling(false)
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      setMediaStream(mediaStream);
      currentVideoRef.current.srcObject = mediaStream;
      currentVideoRef.current.play();
      incomingCall.answer(mediaStream);

      incomingCall.on("stream", (remoteStream) => {
        console.log(remoteStream, "fffff");
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.onloadedmetadata = () => {
            remoteVideoRef.current.play().catch((error) => {
              console.error(error, "play error");
            });
          };
        }
      });
    });
  };

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentVideoRef.current.srcObject = mediaStream;
      currentVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);

      console.log(call, "tttt");

      call?.on("stream", (remoteStream) => {
        console.log(remoteStream, "remoteSTReam");
        if (remoteVideoRef.current) {
          // remoteVideoRef.current.pause();

          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.onloadedmetadata = () => {
            remoteVideoRef.current.play().catch((error) => {
              console.error(error, "play error");
            });
          };
        }
      });
    });
  };

  const endCall = () => {
    if (mediaStream) {
      console.log(mediaStream, "media");
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
    if (incomingCall) {
      console.log(incomingCall, "incoming call");
      incomingCall.close();
      setIncomingCall(null);
    }

    if (remoteVideoRef.current) {
      remoteVideoRef.current.pause();
      remoteVideoRef.current.srcObject = null;
    }
    // Stop local video playback when ending the call
    if (currentVideoRef.current) {
      currentVideoRef.current.pause();
      currentVideoRef.current.srcObject = null;
    }
  };
  return (
    <>
      <div className="bg-black">
        <div className="flex justify-center pt-10">
          
            <video
              ref={currentVideoRef}
              className="pt-14 ml-72 absolute w-28"
            />
            <video
              ref={remoteVideoRef}
              className="pt-10"
              style={{ width: "800px", height: "400px" }}
            />
         
{incomingCall && calling && (
    <div className="absolute bg-green-500 w-52 h-64 flex justify-center rounded-lg px-5 py-5">
            <img
              className="vibrate-image"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/phone-ring-4916113-4094471.png"
              alt=""
            />
            <span className=" absolute bg-green-500  text-slate-900 rounded-2x font-bold p-2">
              Press Accept Button
            </span>
          </div>
)}
          
        </div>

        <div className="flex justify-center items-center p-5">
          {/* <input
          type="text"
          value={remotePeerIdValue}
          onChange={(e) => setRemotePeerIdValue(e.target.value)}
        /> */}
          {/* <button className='bg-blue-500' onClick={() => call(remotePeerIdValue)}>call</button> */}

          <div className="">
            {incomingCall && calling && (
              <div className="">
                <button
                  className="text-white bg-green-400 text-sm px-3 py-2 rounded-lg mr-5"
                  onClick={acceptCall}
                >
                  Accept Call
                </button>
              </div>
            )}
          </div>

          <button
            className="text-white bg-red-500 text-sm px-3 py-2 rounded-lg mr-5"
            onClick={endCall}
          >
            End Call
          </button>
          <button
            className="text-white bg-blue-500 text-sm px-3 py-2 rounded-lg"
            onClick={invitePatient}
          >
            Invite Patient
          </button>
        </div>
      </div>
    </>
  );
};

export default Videcall;
