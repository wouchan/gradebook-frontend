<script>
  const colorVariants = {
    1: "red",
    2: "orange",
    3: "yellow",
    4: "lime",
    5: "green",
    6: "blue",
  };

  let { value } = $props();
</script>

<div class="tile" style:background-color={colorVariants[value]}>
  <span>{value}</span>
</div>

<style>
  .tile {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .tile:hover {
    transform: scale(1.25);
  }

  span {
    font-weight: 700;
  }
</style>
