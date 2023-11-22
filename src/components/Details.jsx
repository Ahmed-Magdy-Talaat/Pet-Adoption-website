import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./API/fetchPet";
import Modal from "./Modal";
import { useContext } from "react";
import AdoptContext from "./AdoptContext";
import CarouselImg from "./CarouselImg";

function Details() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [adoptPet, setAdoptedPet] = useContext(AdoptContext);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const petRes = useQuery(["details", id], fetchPet);
  if (petRes.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = petRes.data.pets[0];
  return (
    <div className="details">
      <CarouselImg images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal && (
          <Modal>
            {" "}
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Details;
