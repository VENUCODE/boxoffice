// Don't forget to import React
import ShowCard from "./showCard";

const ShowGrid = ({ data }) => {
    return data.map(item => (
        <ShowCard
            key={item.show.id} // Don't forget to add a unique key for each mapped element
            name={item.show.name}
            id={item.show.id}
            summary={item.show.summary}
            image={item.show.image ? item.show.image.medium : null}
        />
    ));
};

export default ShowGrid;
