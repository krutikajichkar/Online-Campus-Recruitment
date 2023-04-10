import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import "./Feedback.css";

function Carousel() {
    const [feedback, setFeedback] = useState([]);
    const collectionRef = collection(db, "feedback");

    const handleDragStart = (e) => e.preventDefault();

    const items = feedback.map((ele) => {
        return (
            <div className="feedback-container" key={ele.id}>
                <div className="box" >
                    <div className="icon">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="content">
                        <p className="para">{ele.content}</p>
                        <center>
                            <div className="horizontal-underline"></div>
                            <h4 className="name">{ele.name}</h4>
                            <p>{`${ele.branch}, ${ele.batch} batch`}</p>
                        </center>
                    </div>
                </div>
            </div>
        );
    })

    const responsive = {
        0: { items: 1 },
        512: { items: 1 },
        666: { items: 1 },
        1024: { items: 2 },
        1361: { items: 3 }
    };

    const getFeedback = async () => {
        await getDocs(collectionRef)
          .then((response) => {
            setFeedback(
              response.docs.map((item) => ({
                ...item.data(),
                id: item.id,
              }))
            );
          })
          .catch((err) => {
            console.log(err.message);
          });
    
        //console.log(feedback);
      };

      useEffect(() => {
        // eslint-disable-next-line
        getFeedback();
      }, []);
      
    return (
        <div>
            <AliceCarousel mouseTracking infinite  disableDotsControls disableButtonsControls responsive={responsive}  items={items} autoPlay/>
        </div>
    )
}

export default Carousel