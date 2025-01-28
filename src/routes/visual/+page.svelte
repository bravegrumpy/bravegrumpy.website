<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';

  import Image from '$lib/components/Image.svelte';

  import { Gallery } from 'flowbite-svelte';

  const catPlacehodler1 = [
    { alt: 'cat', src: 'https://placecats.com/400/600?r' },
    { alt: 'cat', src: 'https://placecats.com/400/300?r' },
    { alt: 'cat', src: 'https://placecats.com/400/500?r' }
  ];
  const catPlacehodler2 = [
    { alt: 'cat', src: 'https://placecats.com/400/200?r' },
    { alt: 'cat', src: 'https://placecats.com/400/400?r' },
    { alt: 'cat', src: 'https://placecats.com/400/500?r' },
    { alt: 'cat', src: 'https://placecats.com/400/250?r' }
  ];
  const catPlacehodler3 = [
    { alt: 'cat', src: 'https://placecats.com/400/550r' },
    { alt: 'cat', src: 'https://placecats.com/400/600?r' },
    { alt: 'cat', src: 'https://placecats.com/400/200?r' }
  ];
  const catPlacehodler4 = [
    { alt: 'cat', src: 'https://placecats.com/400/200?r' },
    { alt: 'cat', src: 'https://placecats.com/400/600?r' },
    { alt: 'cat', src: 'https://placecats.com/400/400?r' }
  ];
  const dogPlaceholder = [
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/600/450?r'
    }
  ];
  const dogPlaceholder1 = [
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/450?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/200?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/100?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/350?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/500?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/100?r'
    }
  ];
  const dogPlaceholder2 = [
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/600/450?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/500?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/1600/900/?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/600?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/100?r'
    }
  ];
  const dogPlaceholder3 = [
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/300?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/450?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/250?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/150?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/600?r'
    }
  ];
  const dogPlaceholder4 = [
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/250?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/150?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/450?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/600?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/400?r'
    },
    {
      alt: 'random placeholder picture of a dog',
      src: 'https://placedog.net/400/300?r'
    }
  ];
</script>

<Article --articleColumn="2/4" --articleRow="1/2">
  <Section>
    <Image
      src={dogPlaceholder1[1].src}
      alt={dogPlaceholder1[1].alt}
      caption={dogPlaceholder1[1].alt}
      --bottomThumb="5"
    />
  </Section>
</Article>

<Article --articleColumn="2/3" --articleRow="2/3">
  <Heading>Placehlder Photos of Doggos</Heading>
  <Section>
    <h2>it'll be here soooooon</h2>
    <p>Please be patient with me.</p>
  </Section>
  <Section className="w-fit self-center">
    <Gallery items={dogPlaceholder} />
  </Section>
</Article>

<Article --articleColumn="1/4" --articleRow="3/4">
  <Gallery class="grid-cols-2 gap-4 md:grid-cols-4">
    <Gallery items={catPlacehodler1} />
    <Gallery items={catPlacehodler2} />
    <Gallery items={catPlacehodler3} />
    <Gallery items={catPlacehodler4} />
    <Gallery items={dogPlaceholder1} />
    <Gallery items={dogPlaceholder2} />
    <Gallery items={dogPlaceholder3} />
    <Gallery items={dogPlaceholder4} />
  </Gallery>
</Article>
