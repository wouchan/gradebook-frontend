<script>
  import Icon from "@iconify/svelte";

  let { icon, link, label } = $props();
</script>

<a href={link}>
  <Icon {icon} style="font-size: 36px" />
  <strong>{label}</strong>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 6px #c0c0c0;
  }
</style>
