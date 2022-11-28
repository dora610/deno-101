import { add, multiply } from "./arithmetic.ts";

function totalCost(outbound: number, inbound: number, tax : number): number{
    return multiply(add(outbound, inbound), tax)
}

const [ob, ib, tx] = Deno.args

console.log(totalCost(parseInt(ob), parseInt(ib), parseFloat(tx)));
