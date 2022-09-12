module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        type: String,
        numberOfPlayers: Number,
        idMaster: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
        ],
        createdAt: {
            type: Date,
            default: new Date()
        },
    },
    { timestamps: false })

    const Game = mongoose.model('Game', schema);
    return Game;
}