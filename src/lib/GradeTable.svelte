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
  <div class="flex gap-2">
    {#each grades as grade}
      <Grade value={grade} />
    {/each}
  </div>
{/snippet}

<div class="table w-full">
  <div class="table-header-group">
    <div class="table-row">
      <div class="table-cell text-left ...">Uczeń</div>
      <div class="table-cell text-left ...">Oceny</div>
    </div>
  </div>
  <div class="table-row-group">
    {#each data as datum}
      <div class="table-row">
        <div class="table-cell text-left ...">{datum.name}</div>
        <div class="table-cell text-left ...">{@render gradeRow(datum.grades)}</div>
      </div>
    {/each}
  </div>
</div>
