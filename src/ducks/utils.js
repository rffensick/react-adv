import { Map, OrderedMap } from "immutable";

export function generateId() {
	return Date.now();
}

export function arrToMap(data, dataRecord = Map) {
	return (new OrderedMap(data)).mapEntries(([uid, value]) => (
		[uid, (new dataRecord(value)).set('uid', uid)]
	));
}