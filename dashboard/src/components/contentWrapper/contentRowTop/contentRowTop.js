import ValueCard from "./valueCard/valueCard";

export default function ContentRowTop() {
  return (
    <div class="row">
      <ValueCard
        title="Products in Database"
        icon="fa-film"
        color="primary"
        value="21"
      />
      <ValueCard
        title="Total categories"
        icon="fa-award"
        color="success"
        value="79"
      />
      <ValueCard
        title="Users in Database"
        icon="fa-user"
        color="warning"
        value="49"
      />
    </div>
  );
}
