import React from "react";
import Pet from "./Pet";
function PetsArr({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets are found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default PetsArr;
