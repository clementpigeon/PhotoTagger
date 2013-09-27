class PhotoTagging < ActiveRecord::Base
  attr_accessible :x_pos, :y_pos

  validates :user_id, :photo_id, :x_pos, :y_pos, presence: true
  validates :user_id, uniqueness: { scope: :photo_id }

  belongs_to :user
  belongs_to :photo
end
