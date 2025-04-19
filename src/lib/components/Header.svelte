<script>
  import HeaderButton from "./HeaderButton.svelte";
</script>

<div>
  <HeaderButton icon="hugeicons:graduate-male" link="classes" label="Classes" />
  <HeaderButton icon="hugeicons:book-04" link="subjects" label="Subjects" />
  <HeaderButton icon="hugeicons:graduation-scroll" link="grades" label="Grades" />
</div>

<style>
  div {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    padding: 1rem;
    box-shadow: 0px 2px 10px #e0e0e0;
  }
</style>
