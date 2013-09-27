class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :title, :url

  validates :owner_id, :title, :url, presence: true
  validates :url, uniqueness: {scope: :owner_id}

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )
end
