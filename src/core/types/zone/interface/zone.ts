import { Vector3 } from '@nativewrappers/client';

interface IZone {
    module: string;
    name: string;
    coords: [Vector3[]] | Vector3[];
    radius?: boolean;
}

export { IZone };
