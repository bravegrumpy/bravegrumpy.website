<script>
    import Month from "$lib/components/Blog/Month.svelte"
    import January from "./2026_01.svx"
    import February from "./2026_02.svx";
</script>

<Month Month="February" />
<February />

<Month Month="January" />
<January open={true} />