class Post < ApplicationRecord
  
    belongs_to :user
    has_many :post_images
    
    has_many :likes, dependent: :destroy
    has_many :users, through: :likes
    
    attachment :image
    validates :body, presence: true, length: { maximum: 140 }
    
  end
  