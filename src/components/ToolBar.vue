<script setup lang="ts">
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';


const route = useRoute()

enum MenuName {
    Home,
    Ticket,
    Effect,
    Skin,
    Setting
}

const selectedMenu = ref(MenuName.Home)

switch (route.path) {
    case "/":        { selectedMenu.value = MenuName.Home;    break; }
    case "/ticket":  { selectedMenu.value = MenuName.Ticket;  break; }
    case "/effect":  { selectedMenu.value = MenuName.Effect;  break; }
    case "/skin":    { selectedMenu.value = MenuName.Skin;    break; }
    case "/setting": { selectedMenu.value = MenuName.Setting; break; }
    

} 

// console.log(route.path)
// console.log(selectedMenu.value)

</script>

<template>

  <div class="toolbar">
        <!-- Home -->
        <RouterLink style="text-decoration: none; color: inherit;" to="/home">
            <div class="toolbox">
                <div class="toollogo" v-if="selectedMenu == MenuName.Home">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.63006 6.14711C1.23337 6.43776 1 6.89326 1 7.37691V14.9614C1 15.8111 1.12797 16.5 2 16.5H6.73529V11.0017H10.2647V16.5H15C15.872 16.5 16 15.8111 16 14.9614V7.37691C16 6.89326 15.7666 6.43776 15.3699 6.14711C13.0576 4.45291 11.7612 3.50304 9.44889 1.80884C8.88687 1.39705 8.11313 1.39705 7.55111 1.80884L1.63006 6.14711Z" fill="black" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <div class="toollogo" v-else>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.63006 9.14711C5.23337 9.43776 5 9.89326 5 10.3769V17.9614C5 18.8111 5.12797 19.5 6 19.5H11V14.0017H14V19.5H19C19.872 19.5 20 18.8111 20 17.9614V10.3769C20 9.89326 19.7666 9.43776 19.3699 9.14711C17.0576 7.45291 15.7612 6.50304 13.4489 4.80884C12.8869 4.39705 12.1131 4.39705 11.5511 4.80884L5.63006 9.14711Z" stroke="black" stroke-width="1.4" stroke-linejoin="round"/>
                    </svg>
                </div>


                <div class="toolname">
                Home
                </div>
            </div>
        </RouterLink>


        <!-- Ticket -->
        <RouterLink style="text-decoration: none; color: inherit;" to="/ticket">
            <div class="toolbox">
                <div class="toollogo" v-if="selectedMenu == MenuName.Ticket">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.5" y="6" width="17" height="13" rx="2" fill="black" stroke="black" stroke-width="1.5"/>
                        <path d="M9 5.5C9 9.99103 9 15.009 9 19.5" stroke="white" stroke-opacity="0.4" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="1 3"/>
                        <path d="M9 5.5V6.5" stroke="white" stroke-opacity="0.4" stroke-width="1.6" stroke-linecap="round"/>
                        <path d="M9 18.5V19.5" stroke="white" stroke-opacity="0.4" stroke-width="1.6" stroke-linecap="round"/>
                    </svg>
                </div>
                    
                <div class="toollogo" v-else>
                    <svg width="26" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.5" y="6" width="17" height="13" rx="2" stroke="black" stroke-width="1.4"/>
                        <path d="M9 7C9 10.5287 9 14.4713 9 18" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="1 3"/>
                    </svg>
                </div>
                
                <div class="toolname">
                    Ticket Registration
                </div>
            </div>

        </RouterLink>

        <!-- Effect -->
        <RouterLink style="text-decoration: none; color: inherit;" to="/effect">
            <div class="toolbox">
                <div class="toollogo" v-if="selectedMenu == MenuName.Effect">
                    
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="25" height="25" fill="white"/>
                        <path d="M5.5 12.5H20.5" stroke="black" stroke-width="1.7" stroke-linecap="round"/>
                        <path d="M5.5 17.5H20.5" stroke="black" stroke-width="1.7" stroke-linecap="round"/>
                        <circle cx="16" cy="17.5" r="2" fill="black" stroke="black" stroke-width="1.5"/>
                        <path d="M5.5 7.5H20.5" stroke="black" stroke-width="1.7" stroke-linecap="round"/>
                        <circle cx="11" cy="7.5" r="2" fill="black" stroke="black" stroke-width="1.5"/>
                    </svg>
                    
                </div>
                
                <div class="toollogo" v-else>
                    
                    <svg width="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 8.5H16.5" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                        <path d="M1.5 13.5H16.5" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                        <circle cx="12" cy="13.5" r="2" fill="white" stroke="black" stroke-width="1.4"/>
                        <path d="M1.5 3.5H16.5" stroke="black" stroke-width="1.4" stroke-linecap="round"/>
                        <circle cx="7" cy="3.5" r="2" fill="white" stroke="black" stroke-width="1.4"/>
                    </svg>
                    
                </div>
                <div class="toolname">
                    Lighting Effect
                </div>
            </div>
        </RouterLink>


        <!-- Skin -->
        <RouterLink style="text-decoration: none; color: inherit;" to="/skin">
            <div class="toolbox">
                <div class="toollogo" v-if="selectedMenu == MenuName.Skin">
                    
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="white"/>
                        <rect x="4.5" y="4.5" width="16" height="16" rx="2" fill="black" stroke="black" stroke-width="1.4"/>
                        <path d="M9.3528 14.1427L7.94538 16.1773C7.65284 16.6002 7.96741 17.1667 8.49478 17.1667H11.3096C11.837 17.1667 12.1516 16.6002 11.859 16.1773L10.4516 14.1427C10.1902 13.7649 9.61416 13.7649 9.3528 14.1427Z" fill="white"/>
                        <path d="M13.3358 12.7545L10.6946 16.1485C10.3681 16.568 10.6787 17.1667 11.2228 17.1667H16.5052C17.0493 17.1667 17.3599 16.568 17.0334 16.1485L14.3922 12.7545C14.1281 12.4152 13.5999 12.4152 13.3358 12.7545Z" fill="white"/>
                        <circle cx="9.83333" cy="9.83333" r="1.33333" fill="white"/>
                    </svg>
                    
                </div>
                
                <div class="toollogo" v-else>
                    
                    <svg width="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1.5" width="16" height="16" rx="2" stroke="black" stroke-width="1.4"/>
                        <path d="M6.3528 11.1427L4.94538 13.1773C4.65284 13.6002 4.96741 14.1667 5.49478 14.1667H8.30962C8.837 14.1667 9.15156 13.6002 8.85903 13.1773L7.45161 11.1427C7.19025 10.7649 6.61416 10.7649 6.3528 11.1427Z" fill="black"/>
                        <path d="M10.3358 9.75455L7.69456 13.1485C7.36809 13.568 7.67869 14.1667 8.2228 14.1667H13.5052C14.0493 14.1667 14.3599 13.568 14.0334 13.1485L11.3922 9.75455C11.1281 9.41515 10.5999 9.41515 10.3358 9.75455Z" fill="black"/>
                        <circle cx="6.83333" cy="6.83333" r="1.33333" fill="black"/>
                    </svg>                    
                    
                </div>
                <div class="toolname">
                    Skin
                </div>
            </div>
                
        </RouterLink>


        <!-- Setting -->
        <RouterLink style="text-decoration: none; color: inherit;" to="/setting">
            <div class="toolbox">


                <div class="toollogo" v-if="selectedMenu == MenuName.Setting">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="25" fill="white"/>
                        <path d="M20.9399 13.8784L20.2116 14.0793C19.7839 14.1973 19.3661 14.5823 19.2109 14.9993L18.9894 15.5335C18.8038 15.9375 18.8266 16.5059 19.0458 16.8917L19.3821 17.4837C19.3912 17.5073 19.3836 17.5659 19.3707 17.5834L17.5633 19.3906C17.5557 19.396 17.5276 19.4081 17.4918 19.4081C17.475 19.4081 17.4644 19.4058 17.4644 19.4058L16.8693 19.068C16.6638 18.9516 16.3998 18.8869 16.1258 18.8869C15.9683 18.8869 15.7346 18.909 15.5109 19.0117L14.9706 19.2346C14.5536 19.3899 14.1685 19.8076 14.0505 20.2353L13.8572 20.9376C13.8474 20.9604 13.8017 20.9962 13.7758 21H11.2227C11.1975 20.997 11.1504 20.9612 11.142 20.9406L10.9472 20.2345C10.8292 19.8076 10.4449 19.3891 10.0294 19.2331L9.44192 18.9873C9.2159 18.8823 8.98075 18.8595 8.8217 18.8595C8.55002 18.8595 8.28748 18.9234 8.08277 19.0398L7.52572 19.3556C7.52572 19.3556 7.51202 19.3594 7.49528 19.3594C7.45875 19.3594 7.43059 19.3473 7.42603 19.3442L5.61865 17.5378C5.60343 17.5172 5.59506 17.4586 5.60267 17.4388L5.93446 16.8544C6.15287 16.4694 6.17722 15.9018 5.99306 15.4969L5.78759 14.9985C5.63235 14.5815 5.21456 14.1957 4.78688 14.0778L4.0624 13.8784C4.03881 13.8685 4.00304 13.8214 4 13.7993V11.2441C4.00304 11.219 4.03881 11.1718 4.05936 11.1627L4.78688 10.9618C5.39644 10.7936 5.95045 9.63623 5.95577 9.62481C6.14374 9.22076 6.12015 8.64473 5.89946 8.2559L5.54027 7.62356C5.53113 7.59997 5.53874 7.54138 5.55168 7.52388L7.35906 5.71666C7.36667 5.71134 7.39483 5.69916 7.43059 5.69916C7.44733 5.69916 7.45799 5.70145 7.45799 5.70145L8.03331 6.02789C8.23649 6.14355 8.49752 6.20747 8.76767 6.20747C8.929 6.20747 9.16644 6.18464 9.39474 6.07659L10.0218 5.81102C10.4358 5.65351 10.8193 5.23499 10.9365 4.80887L11.1428 4.0624C11.1526 4.03881 11.1998 4.00304 11.2211 4H13.7766C13.8017 4.00304 13.8489 4.03881 13.858 4.05935L14.065 4.80887C14.1822 5.23499 14.5665 5.65351 14.982 5.81026L15.5611 6.053C15.7879 6.15877 16.0231 6.18159 16.1829 6.18159C16.4545 6.18159 16.7163 6.11768 16.9203 6.00201L17.5283 5.65655C17.5283 5.65655 17.542 5.65275 17.5588 5.65275C17.5953 5.65275 17.6234 5.66492 17.628 5.66796L19.4346 7.47442C19.4498 7.49496 19.4582 7.5528 19.4498 7.57334L19.083 8.21937C18.8646 8.6044 18.8403 9.1713 19.0229 9.57535L19.2124 10.0395C19.3669 10.4573 19.7862 10.8431 20.2131 10.961L20.9376 11.1604C20.9612 11.1703 20.997 11.2174 21 11.2395V13.7947C20.997 13.8198 20.9612 13.867 20.9414 13.8754L20.9399 13.8784Z" fill="black" stroke="black" stroke-width="1.6"/>
                        <circle cx="12.5" cy="12.5" r="2.5" fill="white" stroke="white" stroke-width="1.6"/>
                    </svg>
                    
                </div>
                
                <div class="toollogo" v-else>
                    
                    <svg width="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9399 10.8784L17.2116 11.0793C16.7839 11.1973 16.3661 11.5823 16.2109 11.9993L15.9894 12.5335C15.8038 12.9375 15.8266 13.5059 16.0458 13.8917L16.3821 14.4837C16.3912 14.5073 16.3836 14.5659 16.3707 14.5834L14.5633 16.3906C14.5557 16.396 14.5276 16.4081 14.4918 16.4081C14.475 16.4081 14.4644 16.4058 14.4644 16.4058L13.8693 16.068C13.6638 15.9516 13.3998 15.8869 13.1258 15.8869C12.9683 15.8869 12.7346 15.909 12.5109 16.0117L11.9706 16.2346C11.5536 16.3899 11.1685 16.8076 11.0505 17.2353L10.8572 17.9376C10.8474 17.9604 10.8017 17.9962 10.7758 18H8.22266C8.19755 17.997 8.15037 17.9612 8.14199 17.9406L7.94718 17.2345C7.82922 16.8076 7.44492 16.3891 7.02941 16.2331L6.44192 15.9873C6.2159 15.8823 5.98075 15.8595 5.8217 15.8595C5.55002 15.8595 5.28748 15.9234 5.08277 16.0398L4.52572 16.3556C4.52572 16.3556 4.51202 16.3594 4.49528 16.3594C4.45875 16.3594 4.43059 16.3473 4.42603 16.3442L2.61865 14.5378C2.60343 14.5172 2.59506 14.4586 2.60267 14.4388L2.93446 13.8544C3.15287 13.4694 3.17722 12.9018 2.99306 12.4969L2.78759 11.9985C2.63235 11.5815 2.21456 11.1957 1.78688 11.0778L1.0624 10.8784C1.03881 10.8685 1.00304 10.8214 1 10.7993V8.24408C1.00304 8.21897 1.03881 8.17179 1.05936 8.16266L1.78688 7.96177C2.39644 7.79361 2.95045 6.63623 2.95577 6.62481C3.14374 6.22076 3.12015 5.64473 2.89946 5.2559L2.54027 4.62356C2.53113 4.59997 2.53874 4.54138 2.55168 4.52388L4.35906 2.71666C4.36667 2.71134 4.39483 2.69916 4.43059 2.69916C4.44733 2.69916 4.45799 2.70145 4.45799 2.70145L5.03331 3.02789C5.23649 3.14355 5.49752 3.20747 5.76767 3.20747C5.929 3.20747 6.16644 3.18464 6.39474 3.07659L7.0218 2.81102C7.43579 2.65351 7.81933 2.23499 7.93652 1.80887L8.14276 1.0624C8.15265 1.03881 8.19983 1.00304 8.22114 1H10.7766C10.8017 1.00304 10.8489 1.03881 10.858 1.05935L11.065 1.80887C11.1822 2.23499 11.5665 2.65351 11.982 2.81026L12.5611 3.053C12.7879 3.15877 13.0231 3.18159 13.1829 3.18159C13.4545 3.18159 13.7163 3.11768 13.9203 3.00201L14.5283 2.65655C14.5283 2.65655 14.542 2.65275 14.5588 2.65275C14.5953 2.65275 14.6234 2.66492 14.628 2.66796L16.4346 4.47442C16.4498 4.49496 16.4582 4.5528 16.4498 4.57334L16.083 5.21937C15.8646 5.6044 15.8403 6.1713 16.0229 6.57535L16.2124 7.03952C16.3669 7.45728 16.7862 7.84307 17.2131 7.96101L17.9376 8.16038C17.9612 8.17027 17.997 8.21745 18 8.23951V10.7947C17.997 10.8198 17.9612 10.867 17.9414 10.8754L17.9399 10.8784Z" stroke="black" stroke-width="1.4"/>
                        <circle cx="9.5" cy="9.5" r="2.5" stroke="black" stroke-width="1.4"/>
                    </svg>
                    
                </div>

                <div class="toolname">
                    Setting
                </div>
            </div>
        </RouterLink>

  </div>

</template>

<style scoped>

.toolbar {
  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 90px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5); 

  /* for test purposes 
  border: 1px solid black; 
  */
}

.toolbox {
  max-width: 90px;
  max-height: 90px;

  width: 20vw; 

  display: flex;
  flex-direction: column;;
  
  align-items: center;

  padding: 7px;
  
}


.toollogo {
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

}

.toolname {
  height: 40px;
  
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 12px;
}



</style>