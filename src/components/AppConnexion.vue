<template>
  <div class="container">
    <div style="width: 80%">
      <div class="parentSwitch">
        <div :class="{ isActive: !active }">Connexion</div>
        <div>
          <input id="s1" type="checkbox" class="switch" v-model="active" />
        </div>
        <div :class="{ isActive: active }">Inscription</div>
      </div>

      <h1>Connexion</h1>
      <input type="text" name="" id="" placeholder="Login" />
      <input type="text" name="" id="MDP" placeholder="Mot de passe" />
      <router-link to="/home">
      <div class="ButtonConnexion">
        <span>Connexion</span>
      </div>
      </router-link>
      <div class="ou">
        <div></div>
        <span>OU</span>
        <div></div>
      </div>
      <div class="ButtonRS">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9884 9.2047H19.25V9.16666H11V12.8333H16.1805C15.4247 14.9678 13.3939 16.5 11 16.5C7.9626 16.5 5.49998 14.0374 5.49998 11C5.49998 7.96262 7.9626 5.49999 11 5.49999C12.402 5.49999 13.6776 6.02891 14.6488 6.89287L17.2416 4.30008C15.6044 2.77429 13.4145 1.83333 11 1.83333C5.93769 1.83333 1.83331 5.9377 1.83331 11C1.83331 16.0623 5.93769 20.1667 11 20.1667C16.0623 20.1667 20.1666 16.0623 20.1666 11C20.1666 10.3854 20.1034 9.78541 19.9884 9.2047Z"
            fill="#FFC107"
          />
          <path
            d="M2.89026 6.73337L5.90197 8.94208C6.71688 6.92449 8.69047 5.49999 11 5.49999C12.4021 5.49999 13.6776 6.02891 14.6488 6.89287L17.2416 4.30008C15.6044 2.77429 13.4145 1.83333 11 1.83333C7.47909 1.83333 4.42568 3.82112 2.89026 6.73337Z"
            fill="#FF3D00"
          />
          <path
            d="M11 20.1667C13.3677 20.1667 15.5191 19.2605 17.1458 17.787L14.3087 15.3862C13.3574 16.1097 12.1951 16.5009 11 16.5C8.61573 16.5 6.59127 14.9797 5.82861 12.8581L2.83936 15.1612C4.35644 18.1298 7.43736 20.1667 11 20.1667Z"
            fill="#4CAF50"
          />
          <path
            d="M19.9884 9.20471H19.25V9.16667H11V12.8333H16.1805C15.819 13.8492 15.1678 14.7369 14.3073 15.3867L14.3087 15.3858L17.1458 17.7865C16.945 17.969 20.1667 15.5833 20.1667 11C20.1667 10.3854 20.1034 9.78542 19.9884 9.20471Z"
            fill="#1976D2"
          />
        </svg>
        <span>Connexion avec Google</span>
      </div>
      <div class="ButtonRS">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_7_93)">
            <path
              d="M19.841 21.0001C20.481 21.0001 21 20.4812 21 19.8411V1.15902C21 0.518848 20.481 0 19.841 0H1.15902C0.518766 0 0 0.518848 0 1.15902V19.8411C0 20.4812 0.518766 21.0001 1.15902 21.0001H19.841Z"
              fill="#395185"
            />
            <path
              d="M14.4896 21.0001V12.8677H17.2193L17.628 9.69847H14.4896V7.67492C14.4896 6.75732 14.7444 6.132 16.0603 6.132L17.7386 6.13126V3.29667C17.4482 3.25803 16.452 3.17174 15.2931 3.17174C12.8733 3.17174 11.2168 4.64871 11.2168 7.36116V9.69847H8.48004V12.8677H11.2168V21.0001H14.4896Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_93">
              <rect width="21" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span>Connexion avec Facebook</span>
      </div>
      <div class="ButtonRS">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3275 10.986C15.3193 9.5874 15.953 8.5333 17.2327 7.75605C16.517 6.73066 15.4342 6.1667 14.0068 6.05801C12.6554 5.95137 11.1768 6.84551 10.6354 6.84551C10.0632 6.84551 8.75479 6.09492 7.72529 6.09492C5.60068 6.12773 3.34277 7.78887 3.34277 11.1686C3.34277 12.1673 3.52529 13.1988 3.89033 14.2611C4.37842 15.6598 6.13799 19.0866 7.97344 19.0312C8.9332 19.0087 9.61201 18.3504 10.8609 18.3504C12.0729 18.3504 12.7005 19.0312 13.771 19.0312C15.6229 19.0046 17.2143 15.8895 17.6777 14.4867C15.1942 13.3157 15.3275 11.0578 15.3275 10.986ZM13.1722 4.73115C14.2119 3.49658 14.1176 2.37275 14.0868 1.96875C13.1681 2.02207 12.1058 2.59424 11.5008 3.29766C10.8343 4.05234 10.4426 4.98545 10.5267 6.0375C11.5192 6.11338 12.4257 5.60273 13.1722 4.73115Z"
            fill="black"
          />
        </svg>

        <span>Connexion avec Apple</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppConnexion",
  data() {
    return {
      active: false,
    };
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.isActive {
  color: #a2b29f;
  font-weight: 700;
}
.parentSwitch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 300;
  margin-top: 80px;
}
.parentSwitch > div {
  margin: 10px;
}
h1 {
  width: 100%;
  text-align: center;
  margin-top: 80px;
  
}
input[type="text"] {
  background: #f8ede3;
  color: black;
  border-radius: 30px;
  width: 100%;
  border: none;
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 25px;
}
#MDP {
  margin-top: 15px;
}
.ButtonConnexion {
  width: 100%;
  background: #a2b29f;
  color: white;
  padding: 12px 20px;
  border-radius: 30px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  margin-top: 25px;
}
.ButtonConnexion>span{
  color: white;
  font-weight: 700;
  font-size: 14px;
  margin-top: 0px;
}
.ou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 20px;
}
.ou > div {
  height: 1px;
  width: 100%;
  margin: 0px 30px;
  background: #a2b29f;
}
.ou > span {
  font-size: 14px;
  flex-wrap: 700;
  display: block;
  color: #a2b29f;
}
.ButtonRS{
    display: flex;
    padding: 12px 20px;
    border: 1px solid #a2b29f;
    border-radius: 30px;
    margin-top: 15px;
    align-items: center;
}
.ButtonRS>span{
    display: flex;
    margin-left: 25px;
    font-weight: 300;
    font-size: 14px;
    margin-top: 0px;
}

/* ! button */
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type="checkbox"],
  input[type="radio"] {
    --active: #f8ede3;
    --active-inner: #a2b29f;
    --focus: 0px #f8ede3;
    --border: #a2b29f;
    --border-hover: #f8ede3;
    --background: #f8ede3;
    --disabled: #f8ede3;
    --disabled-inner: #a2b29f;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--background));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type="checkbox"]:after,
  input[type="radio"]:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  input[type="checkbox"]:checked,
  input[type="radio"]:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  input[type="checkbox"]:disabled,
  input[type="radio"]:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }
  input[type="checkbox"]:disabled:checked,
  input[type="radio"]:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }
  input[type="checkbox"]:disabled + label,
  input[type="radio"]:disabled + label {
    cursor: not-allowed;
  }
  input[type="checkbox"]:hover:not(:checked):not(:disabled),
  input[type="radio"]:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }
  input[type="checkbox"]:focus,
  input[type="radio"]:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  input[type="checkbox"]:not(.switch),
  input[type="radio"]:not(.switch) {
    width: 21px;
  }
  input[type="checkbox"]:not(.switch):after,
  input[type="radio"]:not(.switch):after {
    opacity: var(--o, 0);
  }
  input[type="checkbox"]:not(.switch):checked,
  input[type="radio"]:not(.switch):checked {
    --o: 1;
  }
  input[type="checkbox"] + label,
  input[type="radio"] + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }

  input[type="checkbox"]:not(.switch) {
    border-radius: 7px;
  }
  input[type="checkbox"]:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }
  input[type="checkbox"]:not(.switch):checked {
    --r: 43deg;
  }
  input[type="checkbox"].switch {
    width: 38px;
    border-radius: 11px;
  }
  input[type="checkbox"].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }
  input[type="checkbox"].switch:checked {
    --ab: var(--active-inner);
    --x: 17px;
  }
  input[type="checkbox"].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }

  input[type="radio"] {
    border-radius: 50%;
  }
  input[type="radio"]:after {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
  }
  input[type="radio"]:checked {
    --s: 0.5;
  }
}
ul {
  margin: 12px;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 320px;
}
ul li {
  margin: 16px 0;
  position: relative;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}




@media screen and (min-width: 768px) {
h1{
  margin-top: 40px;
}
.parentSwitch{
  margin-top: 40px;

}
}
</style>
