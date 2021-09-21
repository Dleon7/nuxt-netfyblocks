<template>
    
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="drop in drops"
        :key="drop.drop_id"
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-card-title> 
             {{drop.collection_name}}
         </v-card-title>
         <v-card-text> 
             {{drop.current_claimed}} / {{drop.max_claimable}}
         </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

    
</template>
<script>
export default {
     data() {
        return {
            drops:[]
        }
    },
    async fetch() {
        this.drops = await this.$axios.$get('http://localhost:3000/api/getDrops')
    }
}
 </script>