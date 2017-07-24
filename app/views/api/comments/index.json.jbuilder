if @comments
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :artwork_id, :user_id, :id, :total_score
    end
  end
end
