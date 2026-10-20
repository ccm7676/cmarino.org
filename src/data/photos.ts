import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.webp', {
  eager: true,
});

function photo(name: string, alt: string) {
  const file = files[`../assets/photos/${name}.webp`];
  if (!file) throw new Error(`Missing photo: ${name}`);
  return { src: file.default, alt };
}

export const photos = [
  photo('island-sunset', 'Islands in the sea at sunset'),
  photo('chairlift', 'Chairlift beneath a snowy mountain peak'),
  photo('lake-boathouse', 'Boathouse on a lake below an autumn forest'),
  photo('harbour-town', 'Harbour town built on rocks by the sea'),
  photo('blue-lagoon', 'Milky blue water between black lava rocks'),
  photo('waterfall-cliff', 'Waterfall running down a dark cliff'),
  photo('cat-on-wall', 'Cat resting on a stone wall above the sea'),
  photo('desert-road', 'Road winding through a lava desert'),
  photo('half-moon', 'Half moon in a black sky'),
  photo('hydra-view', 'View of the sea and hills past a stone wall in Hydra, Greece'),
  photo('snowy-range', 'Snow-covered mountain range under a blue sky'),
  photo('yellow-flowers', 'Yellow wildflowers'),
  photo('sea-cliff', 'Sunlit cliff dropping into the sea'),
  photo('river-rapids', 'River rushing between boulders'),
  photo('winter-valley-at-dusk', 'Snowy valley with a lit road at dusk'),
  photo('dog-in-heather', 'Dog lying in a field of heather'),
  photo('lava-sunset', 'Orange sunset over a lava field'),
  photo('alpine-valley-through-trees', 'Alpine valley seen through trees'),
  photo('rocky-coast', 'Rocky coastline with mountains across the water'),
  photo('city-alley', 'Narrow alley between brick buildings'),
  photo('plane-in-blue-sky', 'Plane flying through a deep blue sky'),
  photo('golden-headland', 'Headland over choppy sea in golden light'),
  photo('ski-slope', 'Skiers below a rocky mountain peak'),
  photo('dark-gorge', 'Dark, narrow rock gorge'),
  photo('seaside-houses', 'White houses along the seafront'),
  photo('waterfall-spray', 'Spray rising from a waterfall'),
  photo('snowy-farm', 'Farm in a snowy clearing surrounded by forest'),
  photo('lone-tree', 'Lone tree on a hillside path'),
  photo('misty-mountains', 'Mist rolling over mountains'),
  photo('mountain-ridge-at-dusk', 'Mountain ridge under a pink dusk sky'),
  photo('hillside-village', 'Village below rocky hills and pine trees'),
  photo('alpine-valley-in-snow', 'Snowy alpine valley'),
  photo('wet-rock-wall', 'Water streaming down a rock wall'),
  photo('coastal-hills', 'Hills sloping into a calm sea'),
  photo('lakeside-plains', 'Lake and green plains under clouds'),
  photo('forest-floor-clover', 'Clover and leaves on the forest floor'),
  photo('london-storefront', 'Black and white street of shopfronts in London'),
  photo('sheep-grazing', 'Sheep grazing in a field'),
  photo('rocky-stream', 'Stream running past rocky hills'),
  photo('boat-on-night-water', 'Small boat on dark water at night'),
  photo('salt-marsh', 'Salt marsh under a clear blue sky'),
  photo('green-cliffs', 'Green hills and cliffs under a cloudy sky'),
  photo('rocky-hillside-pine', 'Pine tree on a rocky hillside'),
  photo('lava-field', 'Lava field stretching to the horizon'),
];
