<script>
  import BlogLayout from '$lib/components/Blog/BlogLayout.svelte';
  import Section from '$lib/components/Section.svelte';

  let h2 = $state('Friday, January 3rd 2025');
  let date = $state('2025-01-03');
  let title = $state('Simulated Annealing Generated Color Pallettes');

  let bgPallette = $state([
    '#6e34a2',
    '#61aba8',
    '#499c2f',
    '#fa830e',
    '#2753c0',
    '#654d86',
    '#d2c8ff',
    '#beb4ff',
    '#d1dcff',
    '#a7bcff',
    '#144614',
    '#66cdaa',
    '#270d3e',
    '#55ab5e'
  ]);

  let gen1 = $state([
    '#981ec3',
    '#00c3bd',
    '#008c20',
    '#f68700',
    '#2050ba',
    '#5b3c5c',
    '#e0acc2',
    '#df7cff',
    '#24c2ff',
    '#9cacff',
    '#2c512a',
    '#54ce7a',
    '#5e4213',
    '#0080a6'
  ]);

  let gen2 = $state([
    '#9a495d',
    '#01d5ff',
    '#219400',
    '#d47500',
    '#2445ff',
    '#513167',
    '#ffab88',
    '#ff93ae',
    '#19ffef',
    '#a7bcff',
    '#1a3500',
    '#82ea95',
    '#00395c',
    '#f8bb4b'
  ]);

  let gen3 = $state([
    '#0038d3',
    '#36d2ff',
    '#459106',
    '#ff7900',
    '#0097ff',
    '#423421',
    '#f38da6',
    '#bbb2ff',
    '#ffe1f2',
    '#e4bc8a',
    '#32500d',
    '#3fd194',
    '#422e59',
    '#b13b00'
  ]);

  let gen4 = $state([
    '#8d2ac1',
    '#5cc8ff',
    '#179918',
    '#f39f38',
    '#0008f6',
    '#8c5992',
    '#3b1100',
    '#da6487',
    '#ff9363',
    '#aec4ff',
    '#434e00',
    '#53cda2',
    '#320848',
    '#58c754'
  ]);

  let pallettes = $derived(
    bgPallette.map((value, index) => ({
      index: index,
      bg: value,
      one: gen1[index],
      two: gen2[index],
      three: gen3[index],
      four: gen4[index]
    }))
  );

  const { open = false } = $props();
</script>

<BlogLayout h2={title} title={date.toString().slice(0, 10)}>
  <h2>{h2}</h2>
  <h3>Even Moar backgrounds</h3>

  <p>
    I am continuing yesterday's exploration of colors. I read <a
      href="https://matthewstrom.com/writing/how-to-pick-the-least-wrong-colors/"
      target="_blank">this essay</a
    >
    about using simulated annealing to generate new color pallettes. The algorithm is a pretty good way
    of generating a fitness function for the colors. It accepts a color pallette, and then generates
    a new color pallette that is optimized for WEBG contrast ratios, and for each of the color-blindness
    types. Here is the
    <a
      href="https://github.com/ilikescience/category-colors/tree/main?tab=readme-ov-file"
      target="_blank">code</a
    > referenced in the essay. Read the essay before continuing, I input the bravegrumpy pallette, used
    on this website, and am comparing it to the results given. One of the parameters in the criteria
    in generating new colors is the similarity to provided color pallette. The output code generates
    the same number of colors as input. I am manually matching each generated color to the color it is
    most similar to in the my brand colors.
  </p>

  <table>
    <caption>Colors visualized</caption>
    <thead>
      <tr>
        <th>Pallette Color</th>
        <th>GeneratedColor</th>
      </tr>
    </thead>
    <tbody>
      {#each pallettes as pallette}
        <tr>
          <td>
            <div
              style:height="200px"
              style:width="200px"
              style:background-color="var(--bravegrumpy--accent1a)"
              style:display="flex"
              style:flex-direction="row"
              style:align-items="center"
              style:justify-content="center"
            >
              <div
                style:width="100px"
                style:height="100px"
                style:display="flex"
                style:flex-direction="row"
                style:align-items="center"
                style:justify-content="center"
                style:background-color={pallette.bg}
              >
                <p style:color="white" style:background-color="black">
                  {pallette.bg}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div
              style:height="200px"
              style:width="200px"
              style:background-color="var(--bravegrumpy-white)"
              style:display="flex"
              style:flex-direction="row"
              style:align-items="center"
              style:justify-content="center"
            >
              <div
                style:width="100px"
                style:height="100px"
                style:display="flex"
                style:flex-direction="row"
                style:align-items="center"
                style:justify-content="center"
                style:background-color={pallette.one}
              >
                <p style:background-color="black" style:color="white">
                  {pallette.one}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div
              style:height="200px"
              style:width="200px"
              style:background-color="var(--bravegrumpy-accent2a "
              style:display="flex"
              style:flex-direction="row"
              style:align-items="center"
              style:justify-content="center"
            >
              <div
                style:width="100px"
                style:height="100px"
                style:display="flex"
                style:flex-direction="row"
                style:align-items="center"
                style:justify-content="center"
                style:background-color={pallette.two}
              >
                <p style:background-color="black" style:color="var(--bravegrumpy-white)">
                  {pallette.two}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div
              style:height="200px"
              style:width="200px"
              style:background-color="var(--bravegrumpy-black)"
              style:display="flex"
              style:flex-direction="row"
              style:align-items="center"
              style:justify-content="center"
            >
              <div
                style:width="100px"
                style:height="100px"
                style:display="flex"
                style:flex-direction="row"
                style:align-items="center"
                style:justify-content="center"
                style:background-color={pallette.three}
              >
                <p style:background-color="black" style:color="white">
                  {pallette.three}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div
              style:height="200px"
              style:width="200px"
              style:background-color="var(--bravegrumpy-black)"
              style:display="flex"
              style:flex-direction="row"
              style:align-items="center"
              style:justify-content="center"
            >
              <div
                style:width="100px"
                style:height="100px"
                style:display="flex"
                style:flex-direction="row"
                style:align-items="center"
                style:justify-content="center"
                style:background-color={pallette.four}
              >
                <p style:background-color="black" style:color="white">
                  {pallette.four}
                </p>
              </div>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div style:display="none">
    <Section>
      <h3>Results:</h3>
      <p>
        Below raw results from various input pallettes. Above I am attempting to build a
        visualization of these results.
      </p>
      <ul>
        <li>
          - [x] Attempt 1:
          <ul>
            <li>
              - Input:
              <ul>
                <li>
                  > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
                  "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e"
                </li>
              </ul>
            </li>
            <li>
              - Avoided Colors:
              <ul>
                <li>&Tab;> "#FF0000", "#000000", "#ffffff",</li>
              </ul>
            </li>
            <li>
              - Output:
              <ul>
                <li>
                  > "#0080a6" "#981ec3" "#54ce7a" "#2c512a" "#f68700" "#2050ba" "#df7cff" "#24c2ff"
                  "#9cacff" "#e0acc2" "#5e4213" "#5b3c5c" "#008c20" "#00c3bd"
                </li>
              </ul>
            </li>
            <li>
              - Ordered Output:
              <ul>
                <li>
                  > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
                  "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e"
                </li>
                <li>
                  > "#981ec3" "#00c3bd" "#008c20" "#f68700" "#2050ba" "#5b3c5c" "#e0acc2" "#df7cff"
                  "#24c2ff" "#9cacff" "#2c512a" "#54ce7a" "#5e4213" "#0080a6"
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          - [ ] Attempt 2:
          <ul>
            <li>
              - Input:
              <ul>
                <li>
                  > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
                  "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e"
                </li>
              </ul>
            </li>
            <li>
              - Avoided Colors:
              <ul>
                <li>> "#FF0000", "#000000", "#ffffff", "#ff00ff", "#df7cff"</li>
              </ul>
            </li>
            <li>
              - Output:
              <ul>
                <li>
                  > "#a7bcff" "#01d5ff" "#f8bb4b" "#9a495d" "#1a3500" "#513167" "#d47500" "#ff93ae"
                  "#19ffef" "#00395c" "#219400" "#82ea95" "#ffab88" "#2445ff"
                </li>
              </ul>
            </li>
            <li>
              - Ordered Output:
              <ul>
                <li>
                  > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
                  "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e"
                </li>
                <li>
                  > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
                  "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e"
                </li>
                <li>
                  > "#9a495d" "#01d5ff" "#219400" "#d47500" "#2445ff" "#513167" "#ffab88" "#ff93ae"
                  "#f8bb4b" "#a7bcff" "#1a3500" "#82ea95" "#00395c" "#19ffef"
                </li>
                <li>
                  > "#______" "#______" "#______" "#______" "#______" "#______" "#______" "#______"
                  "#______" "#______" "#______" "#______" "#______" "#______"
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
          "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e" > "#8d2ac1" "#5cc8ff"
          "#179918" "#f39f38" "#0008f6" "#8c5992" "#3b1100" "#da6487" "#ff9363" "#aec4ff" "#434e00"
          "#53cda2" "#320848" "#58c754" > '#063400', '#00266f',
        </li>
        <li>
          > "#6e34a2" "#61aba8" "#499c2f" "#fa830e" "#2753c0" "#654d86" "#d2c8ff" "#beb4ff"
          "#d1dcff" "#a7bcff" "#144614" "#66cdaa" "#270d3e" "#55ab5e" > "#0038d3" "#36d2ff"
          "#459106" "#ff7900" "#0097ff" "#423421" "#f38da6" "#bbb2ff" "#ffe1f2" "#e4bc8a" "#32500d"
          "#3fd194" "#422e59" "#b13b00"
        </li>
      </ul>

      <p></p>
    </Section>
    <div>
      <table>
        <caption> Solarized Color Pallette </caption>
        <tbody>
          <tr>
            <td>
              <p>___base-3___: #fdf6e3;</p>
              <p>___base-2___: #eee8d5;</p>
              <p>___base-1___: #93a1a1;</p>
              <p>___base-0___: #839496;</p>
              <p>___base-00__: #657b83;</p>
              <p>___base-01__: #586e75;</p>
              <p>___base-02__: #073642;</p>
              <p>___base-03__: #002b36;</p>
              <p>_____red____: #dc322f;</p>
              <p>___orange___: #cb4b16;</p>
              <p>___yellow___: #b58900;</p>
              <p>___green____: #859900;</p>
              <p>____cyan____: #2aa198;</p>
              <p>____blue____: #268bd2;</p>
              <p>___violet___: #6c71c4;</p>
              <p>___magenta__: #d33682;</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</BlogLayout>
