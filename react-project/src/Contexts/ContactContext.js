import React, { createContext, useState } from "react";

import ContactDialog from "../Components/ContactDialog";

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      <ContactDialog />
      {children}
    </ContactContext.Provider>
  );
};

const useContactContext = () => React.useContext(ContactContext);

export { ContactContextProvider, useContactContext };
