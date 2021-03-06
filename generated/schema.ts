// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalNo(): BigInt {
    let value = this.get("proposalNo");
    return value.toBigInt();
  }

  set proposalNo(value: BigInt) {
    this.set("proposalNo", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get totalVotes(): BigInt {
    let value = this.get("totalVotes");
    return value.toBigInt();
  }

  set totalVotes(value: BigInt) {
    this.set("totalVotes", Value.fromBigInt(value));
  }

  get voted(): Array<string> {
    let value = this.get("voted");
    return value.toStringArray();
  }

  set voted(value: Array<string>) {
    this.set("voted", Value.fromStringArray(value));
  }

  get voteCancelled(): Array<string> {
    let value = this.get("voteCancelled");
    return value.toStringArray();
  }

  set voteCancelled(value: Array<string>) {
    this.set("voteCancelled", Value.fromStringArray(value));
  }

  get queued(): boolean {
    let value = this.get("queued");
    return value.toBoolean();
  }

  set queued(value: boolean) {
    this.set("queued", Value.fromBoolean(value));
  }

  get executed(): boolean {
    let value = this.get("executed");
    return value.toBoolean();
  }

  set executed(value: boolean) {
    this.set("executed", Value.fromBoolean(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): Array<string> {
    let value = this.get("proposal");
    return value.toStringArray();
  }

  set proposal(value: Array<string>) {
    this.set("proposal", Value.fromStringArray(value));
  }

  get voted(): Array<string> {
    let value = this.get("voted");
    return value.toStringArray();
  }

  set voted(value: Array<string>) {
    this.set("voted", Value.fromStringArray(value));
  }

  get voteCancelled(): Array<string> {
    let value = this.get("voteCancelled");
    return value.toStringArray();
  }

  set voteCancelled(value: Array<string>) {
    this.set("voteCancelled", Value.fromStringArray(value));
  }
}

export class Voted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Voted entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Voted entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Voted", id.toString(), this);
  }

  static load(id: string): Voted | null {
    return store.get("Voted", id) as Voted | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get score(): BigInt {
    let value = this.get("score");
    return value.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }
}

export class VoteCancelled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VoteCancelled entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VoteCancelled entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VoteCancelled", id.toString(), this);
  }

  static load(id: string): VoteCancelled | null {
    return store.get("VoteCancelled", id) as VoteCancelled | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get score(): BigInt {
    let value = this.get("score");
    return value.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }
}
