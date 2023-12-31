//Auth token we will use to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmZDgzZWU4MS0yN2U2LTRhZjAtYjg2ZS1lNTNkMTAzYTBkNjAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMTI1MjA5MiwiZXhwIjoxNzAxODU2ODkyfQ.OE2DhXNKMEAc5HGMEwk2OCQOmEtAMJOdUh0QTIPMHQE";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};