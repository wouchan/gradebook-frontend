<script>
  import GradeTable from "$lib/components/GradeTable.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<main>
  <Header />
  <GradeTable />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }
</style>
