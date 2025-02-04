<script>
  import { authClient } from '$lib/auth-client';

  let name = $state('');
  let password = $state('');
  let email = $state('');
  let image = $state();

  let formStyle = $state(
    'bg-parchment-300 rounded-[5px] border-2 border-solid border-solarized-yellow dark:border-solarized-base-0 dark:bg-solarized-base-01 w-fit'
  );
  let formTitleStyle = $state(
    'bg-solarized-yellow w-full h-12 text-center pt-2 text-2xl dark:bg-solarized-base-0 dark:text-solarized-base-3'
  );
  let inputStyle = $state(
    'bg-solarized-base-3 dark:bg-solarized-base-02 w-fit border-[1px] rounded-[5px] border-solid border-solarized-yellow dark:border-solarized-base-01 mb-4 text-lg font-bodyText hover:scale-105 focus:scale-105 focus:ring-2 hover:ring-2 focus:ring-solid hover:ring-solid focus:ring-bravegrumpy-brand1 hover:ring-bravegrumpy-brand1 dark:hover:ring-bravegrumpy-accent2b dark:focus:ring-bravegrumpy-accent2b'
  );
  let labelStyle = $state('mb-2 w-fit text-center font-heading text-xl');
  let labelDivStyle = $state();
  let fieldStyle = $state(
    'my-5 border-2 border-solid border-solarized-yellow rounded-[5px] px-5 mx-5 bg-solarized-base-2 dark:bg-solarized-base-03 dark:border-solarized-base-0 h-24 '
  );
  let formButtonStyle = $state(
    'border-[5px] border-solid border-current font-navMenuDefault text-2xl bg-bravegrumpy-accent2b text-bravegrumpy-dark1 rounded-[5px] dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b hover:scale-105 hover:bg-bravegrumpy-accent2a hover:text-bravegrumpy-black dark:hover:bg-bravegrumpy-brand6 dark:hover:text-bravegrumpy-highlight1 hover:font-navMenuActive mx-36 my-6 w-fit px-5 py-2'
  );
  let inputDivStyle = $state('');
  let formButtonDivStyle = $state('');

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image: image ? convertImageToBase64(image) : undefined
      },
      {
        onRequest: (ctx) => {
          //show loading
        },
        onSuccess: (ctx) => {
          //redirect to logged in
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        }
      }
    );
  };
</script>

<form class={formStyle}>
  <h3 class={formTitleStyle}>Sign Up!</h3>
  <div class={fieldStyle}>
    <div class={labelStyle}>
      <label for="name"> Name </label>
    </div>
    <div>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onchange={(e) => (name = e.target.value)}
        class={inputStyle}
      />
    </div>
  </div>
  <div class={fieldStyle}>
    <div class={labelStyle}>
      <label for="password"> Password </label>
    </div>
    <div class={inputDivStyle}>
      <input
        id="password"
        name="password"
        type="password"
        onchange={(e) => (password = e.target.value)}
        class={inputStyle}
      />
    </div>
  </div>
  <div class={fieldStyle}>
    <div class={labelStyle}>
      <label for="email"> Email </label>
    </div>
    <div class={inputDivStyle}>
      <input
        id="email"
        name="email"
        type="email"
        onchange={(e) => (email = e.target.value)}
        class={inputStyle}
      />
    </div>
  </div>
  <div class={fieldStyle}>
    <div class={labelStyle}>
      <label for="file">Profile Picture </label>
    </div>
    <div class={inputDivStyle}>
      <input
        id="file"
        name="email"
        type="file"
        onchange={(e) => (image = e.target.files?.[0])}
        accept="image/*"
        class={inputStyle}
      />
    </div>
  </div>
  <div>
    <button onclick={signUp} class={formButtonStyle}> Sign Up </button>
  </div>
</form>

<p>{name}</p>
<p>{password}</p>
<p>{email}</p>
