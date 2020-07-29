<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
            <!-- <TextField hint="" :text="userData" /> -->
            <!-- <TextField v-model="textFieldValue" hint="Enter text..." />
            <Button text="editr" @tap="update()" />
            <Label :text="textFieldValue" textWrap="true" /> -->
            <Button text="map" @tap="map()" />
            <Button text="sdk map" @tap="nextMap()" />
            <Label :text="countLinks" textWrap="true" />
            <TextField v-model="newLink" hint="Enter text..." />
            <Button text="add link " @tap="add_link()" />

            <ListView for="link in userData" key="link"   @itemTap="remove()"
                style="height:1250px">
                <v-template>
                    <StackLayout>
                        <Label :text="link" textWrap="true" />
                        <!-- <Image src="~/assets/images/delete.png" v-on="remove(index)"  stretch="none" /> -->
                        
                    </StackLayout>
                </v-template>
            </ListView> 
            
        </StackLayout>
    </Page>
</template>
<script >

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Map from './maps';
import Tem from './Tem';
  export default {
    data() {
      return {
        msg: 'Hello World!',
        newLink: '',
      }
    },
    computed: {
    ...mapGetters(["countLinks", "userData"]),
    
  //   ...mapActions([ "needARide"]),
  //   textFieldValue: {
  //   get () {
  //     return this.$store.state.user
  //   },
  //   set (value) {
  //     this.$store.dispatch('needARide', value)
  //     console.log("value", value);
  //   }
  // }

    // ...mapState([
    //   'links'
    // ])
  },
  methods: {
    // update() {
    //   // console.log("usman");
    //   this.$store.dispatch("needARide", );
    //   console.log("khan");
    // },
    ...mapMutations([
      'ADD_LINK',
    ]),
    ...mapActions([
      'removeLink',
      'addLink'
    ]),
    add_link: function(){
      this.addLink(this.newLink),
      this.newLink = ''
    },
    remove: function(){
      // const item = this.$store.state.links.getItem(e.index)
      // console.log("item", item);
      console.log("usman");
      this.removeLink()
    },
    map(){
      this.$navigateTo(Map)
      console.log("map");
    },
    nextMap(){
      this.$navigateTo(Tem)
      console.log("sdk map");
    },
  },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
