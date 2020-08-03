import {getAllShows} from '@/services/service.js';
import {getShowById} from '@/services/service.js';
import {getShowsByName} from '@/services/service.js';

jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

    it('testing the getAllShows api',async()=>{
        const response = await getAllShows();
        expect(response.data[0].val).toBe(1)
    });
    it('testing the getShowById api',async()=>{
        const response = await getShowById();
        expect(response.data[0].val).toBe(1)
    });
    it('testing the getShowsByName api',async()=>{
        const response = await getShowsByName();
        expect(response.data[0].val).toBe(1)
    });