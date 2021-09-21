<template>
    <nav id="nav">
    <v-img src="/nefty-blocks-logo-dark.svg" max-width="200"/>
    
     <v-tabs>
    <v-tab         
        nuxt
        v-for="link in navlinks"
        v-bind:key="link.to"
        v-bind:to="link.to"
    >
        {{link.text}}
    </v-tab>
     
  </v-tabs>


    </nav>    
</template>
<script>
export default {
    data() {
        return {
            navlinks: [
                {
                    text: "home", 
                    to: "/"
                },
                {
                    text: "collections", 
                    to: "/collections"
                },
                {
                    text: "drops", 
                    to: "/drops"
                }
            ]
        }
    },
 }
</script>

<style>  
    #nav {
        background-color: rgb(29, 56, 89);
        padding: 4px 16px 4px 16px;
        display: block;
        min-height: 80px;

    }

    #logo {
        max-width:200px;

    }
</style>