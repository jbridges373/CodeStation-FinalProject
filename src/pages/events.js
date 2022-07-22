import { useEffect, useState } from "react";
// import Navbar from "../components/navbar";
import { fetechContest } from "../utlis";
import ContestComp from "../components/contest";

const Events = ({ setter, user }) => {
  // useState
  const [contests, setContest] = useState([]);

  useEffect(() => {
    fetechContest(setContest);
  }, []);

  return (
    <div>
      {/* <Navbar user={user} setter={setter} /> */}
      <h1 className="Header1Styled">Events {user}</h1>
      <div>
        <div>
          {contests.map((contest, i) => {
            return (
              <ContestComp
                key={i}
                name={contest.name}
                url={contest.url}
                start_time={contest.start_time}
                end_time={contest.end_time}
                site={contest.site}
                status={contest.status}
              />
            );
          })}
          ,
        </div>
      </div>
    </div>
  );
};

export default Events;
