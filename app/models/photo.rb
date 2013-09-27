class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :title, :url

  validates :owner_id, :title, :url, presence: true
  # validates :url, uniqueness: {scope: :owner_id}

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :photo_taggings

  has_many :tagged_users, through: :photo_taggings, source: :user

end
