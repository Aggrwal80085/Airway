import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getFlights' : ActorMethod<[], Array<string>>,
  'printDepartDate' : ActorMethod<[], string>,
  'printDestination' : ActorMethod<[], string>,
  'printOrigin' : ActorMethod<[], string>,
  'printReturnDate' : ActorMethod<[], string>,
  'printTravellers' : ActorMethod<[], bigint>,
  'printTripType' : ActorMethod<[], string>,
  'setDepartDate' : ActorMethod<[string], string>,
  'setDestination' : ActorMethod<[string], string>,
  'setOrigin' : ActorMethod<[string], string>,
  'setReturnDate' : ActorMethod<[string], string>,
  'setTravellers' : ActorMethod<[bigint], string>,
  'setTripType' : ActorMethod<[string], string>,
}
