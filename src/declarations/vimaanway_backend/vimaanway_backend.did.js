export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getFlights' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'printDepartDate' : IDL.Func([], [IDL.Text], ['query']),
    'printDestination' : IDL.Func([], [IDL.Text], ['query']),
    'printOrigin' : IDL.Func([], [IDL.Text], ['query']),
    'printReturnDate' : IDL.Func([], [IDL.Text], ['query']),
    'printTravellers' : IDL.Func([], [IDL.Int], ['query']),
    'printTripType' : IDL.Func([], [IDL.Text], ['query']),
    'setDepartDate' : IDL.Func([IDL.Text], [IDL.Text], []),
    'setDestination' : IDL.Func([IDL.Text], [IDL.Text], []),
    'setOrigin' : IDL.Func([IDL.Text], [IDL.Text], []),
    'setReturnDate' : IDL.Func([IDL.Text], [IDL.Text], []),
    'setTravellers' : IDL.Func([IDL.Int], [IDL.Text], []),
    'setTripType' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
