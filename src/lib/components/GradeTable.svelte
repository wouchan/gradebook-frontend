<script>
  import Grade from "./Grade.svelte";

  let data = [
    {
      name: "Jan Kowalski",
      grades: [4, 5, 4, 6],
    },
    {
      name: "Michał Antoniusz",
      grades: [1, 3, 2],
    },
    {
      name: "Janina Kowalowska",
      grades: [6, 5, 4, 1, 6],
    },
  ];
</script>

{#snippet gradeRow(grades)}
  <div class="grade-row">
    {#each grades as grade}
      <Grade value={grade} />
    {/each}
  </div>
{/snippet}

<div class="container">
  <table>
    <thead>
      <tr>
        <td>Uczeń</td>
        <td>Oceny</td>
      </tr>
    </thead>
    <tbody>
      {#each data as datum}
        <tr>
          <td>{datum.name}</td>
          <td>{@render gradeRow(datum.grades)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .container {
    border: 3px solid #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td {
    padding: 0.25rem;
  }

  thead td {
    font-weight: 600;
    background-color: #f0f0f0;
  }

  tr:nth-child(even) {
    background-color: #f0f0f0;
  }

  tr:nth-child(odd) {
    background-color: #fafafa;
  }

  .grade-row {
    display: flex;
    gap: 0.5rem;
  }
</style>
