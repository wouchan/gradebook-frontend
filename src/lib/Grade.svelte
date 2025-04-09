<script>
  const colorVariants = {
    1: "bg-red-600 hover:bg-red-700",
    2: "bg-orange-500 hover:bg-orange-600",
    3: "bg-yellow-300 hover:bg-yellow-400",
    4: "bg-lime-400 hover:bg-lime-500",
    5: "bg-green-600 hover:bg-green-700",
    6: "bg-blue-600 hover:bg-blue-700",
  };

  let { value } = $props();
</script>

<div
  class={`${
    colorVariants[value]
  } p-2 rounded-lg size-8 flex justify-center items-center hover:scale-125 duration-100`}
>
  <span class="font-semibold">{value}</span>
</div>
