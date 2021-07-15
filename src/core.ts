import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { 
    Proposal,
    Voted,
    VoteCancelled,
    User
} from "../generated/schema"

export function getOrCreateProposal(proposalId: BigInt, owner: Address): Proposal {
    let proposalIdHex = proposalId.toHexString()
    let proposal = Proposal.load(proposalIdHex)
    if(proposal != null){
        return proposal as Proposal
    }
    proposal = new Proposal(proposalIdHex)
    let user = getOrCreateUser(owner).id
    proposal.proposalNo = proposalId
    proposal.owner = user
    proposal.totalVotes = BigInt.fromI32(0)
    proposal.queued = false
    proposal.executed = false
    proposal.save()
    return proposal as Proposal
}

export function getOrCreateUser(address: Address): User {
    let userId = address.toHexString()
    let user = User.load(userId)
    if(user != null){
        return user as User
    }
    user = new User(userId)
    user.save()
    return user as User
}

export function getOrCreateVoted(proposalId: BigInt, user: Address, score: BigInt): Voted {
    let votedId = proposalId.toHexString()
    let voted = Voted.load(votedId)
    let proposal = Proposal.load(votedId)
    if(voted != null){
        return voted as Voted
    }
    voted = new Voted(votedId)
    voted.user = getOrCreateUser(user).id
    voted.proposal = proposal.id
    voted.score = score
    voted.save()
    return voted as Voted
}
export function getOrCreateVoteCancelled(proposalId: BigInt, user: Address, score: BigInt): VoteCancelled {
    let votedId = proposalId.toHexString()
    let proposal = Proposal.load(votedId)
    let voteCancelled = VoteCancelled.load(votedId)
    if(voteCancelled != null){
        return voteCancelled as VoteCancelled
    }
    voteCancelled = new VoteCancelled(votedId)
    voteCancelled.proposal = proposal.id
    voteCancelled.user = getOrCreateUser(user).id
    voteCancelled.score = score
    voteCancelled.save()
    return voteCancelled as VoteCancelled
}
