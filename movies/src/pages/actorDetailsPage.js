import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from '../components/actorDetails'; 
import PageTemplate from "../components/templateActorPage";
import ActorDetails from "../components/actorDetails";

const ActorPage = (props) => {
    const { id } = useParams();
    const [actor] = useActor(id);
  
    return (
      <>
        {actor ? (
          <>
            <PageTemplate actor={actor}>
              <ActorDetails actor={actor} />
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for actor details</p>
        )}
      </>
    );
  };
  
  export default ActorPage;