`🐙============================================================================================================================<⚡>`;
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;
const User = sequelize.define(
  `User`,
  {
    JID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: `Users`,
  }
);
`🐙============================================================================================================================<⚡>`;
async function addUser(jid = null) {
  User.findOrCreate({
    where: {
      JID: jid,
    },
  });
}
`🐙============================================================================================================================<⚡>`;
async function getUser(jid = null) {
  var Msg = await User.findAll({
    where: {
      JID: jid,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    return true;
  }
}
`🐙============================================================================================================================<⚡>`;
module.exports = {
  User: User,
  addUser: addUser,
  getUser: getUser,
};
`🐙============================================================================================================================<⚡>`;
