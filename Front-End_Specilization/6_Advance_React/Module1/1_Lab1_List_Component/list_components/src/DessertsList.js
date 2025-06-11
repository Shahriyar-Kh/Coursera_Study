function DessertsList(props) {
  const lowCalItems = props.data.filter((dessert) => {
    return dessert.calories < 500; })
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      return (
        <li> {dessert.name} - {dessert.calories} cal</li>
      );
});
  return (
    <ul>{lowCalItems}</ul>
  ) ;
}

export default DessertsList;
