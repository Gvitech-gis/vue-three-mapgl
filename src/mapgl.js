import World, { world } from './World';
import Controls from './controls/index';

import Geo from './geo/Geo.js';

import Layer, { layer } from './layer/Layer';
import LayerGroup, { layerGroup } from './layer/LayerGroup';

import EnvironmentLayer, { environmentLayer } from './layer/environment/EnvironmentLayer';
import RasterTileLayer, { rasterTileLayer } from './layer/tile/RasterTileLayer';
import GeoJSONTileLayer, { geoJSONTileLayer } from './layer/tile/GeoJSONTileLayer';
import TopoJSONTileLayer, { topoJSONTileLayer } from './layer/tile/TopoJSONTileLayer';

import ThreeJSONLayer, { threeJSONLayer } from './layer/ThreeJSONLayer';

import MVTTileLayer, { mvtTileLayer } from './layer/tile/MVTTileLayer';
import MVTTile, { mvtTile } from './layer/tile/MVTTile';

import GeoJSONTile, { geoJSONTile } from './layer/tile/GeoJSONTile';
import GeoJSONLayer, { geoJSONLayer } from './layer/GeoJSONLayer';

import TopoJSONLayer, { topoJSONLayer } from './layer/TopoJSONLayer';
import GeoJSONWorkerLayer, { geoJSONWorkerLayer } from './layer/GeoJSONWorkerLayer';
import TopoJSONWorkerLayer, { topoJSONWorkerLayer } from './layer/TopoJSONWorkerLayer';

import PolygonLayer, { polygonLayer } from './layer/geometry/PolygonLayer';
import PolylineLayer, { polylineLayer } from './layer/geometry/PolylineLayer';
import PointLayer, { pointLayer } from './layer/geometry/PointLayer';

import Point, { point } from './geo/Point';
import LatLon, { latLon } from './geo/LatLon';

import PickingMaterial from './engine/PickingMaterial';

import Util from './util/index';

const MapGL = {

    version: '0.3',

    // Public API
    World: World,
    world: world,

    Controls: Controls,
    Geo: Geo,

    Layer: Layer,
    layer: layer,

    EnvironmentLayer: EnvironmentLayer,
    environmentLayer: environmentLayer,

    RasterTileLayer: RasterTileLayer,
    rasterTileLayer: rasterTileLayer,

    GeoJSONTileLayer: GeoJSONTileLayer,
    geoJSONTileLayer: geoJSONTileLayer,

    GeoJSONTile: GeoJSONTile,
    geoJSONTile: geoJSONTile,

    TopoJSONTileLayer: TopoJSONTileLayer,
    topoJSONTileLayer: topoJSONTileLayer,

    GeoJSONLayer: GeoJSONLayer,
    geoJSONLayer: geoJSONLayer,

    MVTTile: MVTTile,
    mvtTile: mvtTile,

    ThreeJSONLayer: ThreeJSONLayer,
    threeJSONLayer: threeJSONLayer,

    TopoJSONLayer: TopoJSONLayer,
    topoJSONLayer: topoJSONLayer,

    GeoJSONWorkerLayer: GeoJSONWorkerLayer,
    geoJSONWorkerLayer: geoJSONWorkerLayer,

    TopoJSONWorkerLayer: TopoJSONWorkerLayer,
    topoJSONWorkerLayer: topoJSONWorkerLayer,

    MVTTileLayer: MVTTileLayer,
    mvtTileLayer: mvtTileLayer,

    PolygonLayer: PolygonLayer,
    polygonLayer: polygonLayer,

    PolylineLayer: PolylineLayer,
    polylineLayer: polylineLayer,

    PointLayer: PointLayer,
    pointLayer: pointLayer,

    Point: Point,
    point: point,

    LatLon: LatLon,
    latLon: latLon,

    PickingMaterial: PickingMaterial,
    Util: Util,

};

export default MapGL;
