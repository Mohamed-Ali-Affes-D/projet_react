function FilterButton(props) {

    return (
        <button type="button" className="btn toggle-btn" >
            <span className="visually-hidden">Afficher </span>
            <span>{props.name}</span>
           
            <span className="visually-hidden"> les tâches</span>
        </button>
    );
}
export default FilterButton;