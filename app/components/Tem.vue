<template>
  <Page actionBarHidden="true">
    <ActionBar title="NativeScript-Vue ❤️ Google Maps"></ActionBar>

    <!-- <GridLayout>
      <MapView :latitude="latitude"
               :longitude="longitude"
               :zoom="zoom"
               :minZoom="minZoom"
               :maxZoom="maxZoom"
               @mapReady="onMapReady"
               @coordinateTapped="onCoordinateTapped"></MapView>
    </GridLayout> -->
     <GridLayout>
        <MapView
            :latitude="latitude"
            :longitude="longitude"
            :zoom="zoom"
            :bearing="bearing" 
            :tilt="tilt"
            @mapReady="onMapReady($event)"  
            markerSelect="onMarkerSelect"
            markerBeginDragging="onMarkerBeginDragging"
            markerEndDragging="onMarkerEndDragging"
            markerDrag="onMarkerDrag"
            cameraChanged="onCameraChanged" 
            cameraMove="onCameraMove"
        />
    </GridLayout>
  </Page>
</template>

<script >
  import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

  export default {
    data() {
      return {
        latitude: 42.069149,
        longitude: 2.954420,
        zoom: 8,
        minZoom: 0,
        maxZoom: 22,
        bearing: 0,
        tilt: 0,
        mapView: undefined
      }
    },

    methods: {
    onMapReady(args) {
    var mapView = args.object;
    
    console.log("Setting a marker...");
    this.addMarker()

},
addMarker(){
         console.log("Setting a marker...");
        var marker = new Marker();
        marker.position = Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index : 1};
        // this.MapView.addMarker(marker);
    }

    }
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
