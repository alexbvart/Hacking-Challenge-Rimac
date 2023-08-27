import { create } from 'zustand'
import { UserStore } from '../models/user-model';


export const useUserStore = create<UserStore>((set) => {
    return {
        dni: '',
        setDni: (dni) => set({ dni }),
    
        cellPhone: '',
        setCellPhone: (cellPhone) => set({ cellPhone }),
    
        licensePlate: '',
        setLicensePlate: (licensePlate) => set({ licensePlate }),
    
        mailing: '',
        setMailing: (mailing) => set({ mailing }),
    
        name: '',
        setName: (name) => set({ name }),
    };
});
  