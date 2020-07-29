<template>
    <Page actionBarHidden="true">
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout>
                <Mapbox
                    accessToken="YOUR-ACCESS-TOKEN-HERE"
                    mapStyle="light"
                    latitude="37.7397"
                    longitude="-121.4252"
                    hideCompass="true"
                    zoomLevel="12"
                    showUserLocation="true"
                    disableZoom="true"
                    disableRotation="true"
                    disableScroll="true"
                    disableTilt="true"
                    @mapReady="onMapReady($event)">
                </Mapbox>
                
        </GridLayout>
    </Page>
</template>
<script >

  export default {
    data() {
      return {
          
      }
    },
    computed: {
    
  },
  methods: {
      
   onMapReady(args) {
    args.map.addMarkers([
        {
            lat: 37.7397,
            lng: -121.4252,
            title: "Tracy, CA",
            subtitle: "Home of The Polyglot Developer!",
            onCalloutTap: () => console.log("'Nice location' marker callout tapped"),
            
        }

    ]);
    console.log();
}
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
