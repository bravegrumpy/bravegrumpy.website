<script>
  let name = $state('');
  let password = $state('');
  let email = $state('');

  let formStyle = $state(
    'bg-parchment-300 rounded-[5px] border-2 border-solid border-solarized-yellow dark:border-solarized-base-0 dark:bg-solarized-base-01 w-fit text-bravegrumpy-black dark:text-bravegrumpy-accent2a'
  );
  let formTitleStyle = $state(
    'bg-solarized-yellow w-full h-12 text-center pt-2 text-2xl dark:bg-solarized-base-0 dark:text-solarized-base-3'
  );
  let inputStyle = $state(
    'bg-solarized-base-3 dark:bg-solarized-base-02 w-fit border-[1px] rounded-[5px] border-solid border-solarized-yellow dark:border-solarized-base-01 mb-4 text-lg font-bodyText hover:scale-105 focus:scale-105 focus:ring-2 hover:ring-2 focus:ring-solid hover:ring-solid focus:ring-bravegrumpy-brand1 hover:ring-bravegrumpy-brand1 dark:hover:ring-bravegrumpy-accent2b dark:focus:ring-bravegrumpy-accent2b'
  );
  let labelStyle = $state('mb-2 w-fit text-center font-heading text-xl');
  let fieldStyle = $state(
    'my-5 border-2 border-solid border-solarized-yellow rounded-[5px] px-5 mx-5 bg-solarized-base-2 dark:bg-solarized-base-03 dark:border-solarized-base-0 h-24 '
  );
  let formButtonStyle = $state(
    'border-[5px] border-solid border-current font-navMenuDefault text-2xl bg-bravegrumpy-accent2b text-bravegrumpy-dark1 rounded-[5px] dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b hover:scale-105 hover:bg-bravegrumpy-accent2a hover:text-bravegrumpy-black dark:hover:bg-bravegrumpy-brand6 dark:hover:text-bravegrumpy-highlight1 hover:font-navMenuActive w-fit px-5 py-2 my-4 ml-24'
  );
</script>

<div>
  <form class={formStyle}>
    <h3 class={formTitleStyle}>Sign In</h3>
    <div class={fieldStyle}>
      <div class={labelStyle}>
        <label for="name">Username </label>
      </div>
      <div>
        <input id="name" name="name" type="text" bind:value={name} class={inputStyle} />
      </div>
    </div>
    <div class={fieldStyle}>
      <div class={labelStyle}>
        <label for="email">Email</label>
      </div>
      <div>
        <input id="email" name="email" type="email" bind:value={email} class={inputStyle} />
      </div>
    </div>
    <div class={fieldStyle}>
      <div class={labelStyle}>
        <label for="password">Password</label>
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          bind:value={password}
          class={inputStyle}
        />
      </div>
    </div>
    <div>
      <button class={formButtonStyle}>Sign In</button>
    </div>
  </form>
</div>

<div>
  <h3>Information</h3>
  <p>{email}</p>
  <p>{name}</p>
  <p>{password}</p>
</div>
