module.exports = function(sequelize, DataTypes) {

  var Interests = sequelize.define("Interests", {

        outdoors: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        art: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }  
        },

        music: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        fitness: {
          type: DataTypes.STRING,
          validate:{
            len: [1]
          } 
        },

        gamesScifi: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        education: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        pets: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        culture: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        business: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        family: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        social: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        },

        foodDrink: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
        }
  });

  // Interests.associate = function(models) {
  //   // Associating Interests with many Events
  //   // When and Interest is deleted, also delete any associated Events (should rarely be deleted)
  //   Interests.hasMany(models.Events, {
  //     onDelete: "cascade"
  //   });
  // };

  return Interests;
};

