// import { BigInt } from "@graphprotocol/graph-ts"
import {
  Migrate,
  NewProposal as NewproposalEvent,
  Voted as VotedEvent,
  VoteCancelled as VoteCancelledEvent,
  Queued as QueuedEvent,
  Executed as ExecutedEvent
} from "../generated/Migrate/Migrate"
import { 
  Proposal
 } from "../generated/schema"
 import {  getOrCreateProposal, getOrCreateVoteCancelled, getOrCreateVoted } from "./core"

export function handleExecuted(event: ExecutedEvent): void {
  let proposalId = event.params.proposalId.toHexString()
  let proposal = Proposal.load(proposalId)
  proposal.executed = true
  proposal.save()
}

export function handleNewProposal(event: NewproposalEvent): void {
  let proposalId = event.params.proposalId
  let owner = event.params.newOwner
  getOrCreateProposal(proposalId, owner)
}

export function handleQueued(event: QueuedEvent): void {
  let proposalId = event.params.proposalId.toHexString()
  let proposal = Proposal.load(proposalId)
  proposal.queued = true
  proposal.save()
}

export function handleVoteCancelled(event: VoteCancelledEvent): void {
  let proposalId = event.params.proposalId
  let proposalIdHex = event.params.proposalId.toHexString()
  let user = event.params.user
  let score = event.params.score
  let proposal = Proposal.load(proposalIdHex)
  if(proposal != null){
    getOrCreateVoteCancelled(proposalId, user, score)
  }
}

export function handleVoted(event: VotedEvent): void {
  let proposalId = event.params.proposalId
  let proposalIdHex = event.params.proposalId.toHexString()
  let user = event.params.user
  let score = event.params.score
  let proposal = Proposal.load(proposalIdHex)
  if(proposal != null){
    getOrCreateVoted(proposalId, user, score)
    proposal.totalVotes = proposal.totalVotes.plus(score)
    proposal.save()
  }
}
