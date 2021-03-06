# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170725050916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "artwork_id",  null: false
    t.text     "body",        null: false
    t.integer  "x_pos",       null: false
    t.integer  "y_pos",       null: false
    t.integer  "total_score", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["artwork_id"], name: "index_annotations_on_artwork_id", using: :btree
    t.index ["user_id"], name: "index_annotations_on_user_id", using: :btree
  end

  create_table "artworks", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.string   "artist",      null: false
    t.integer  "user_id",     null: false
    t.string   "link",        null: false
    t.string   "year"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_artworks_on_user_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",        null: false
    t.integer  "user_id",     null: false
    t.integer  "artwork_id",  null: false
    t.integer  "total_score", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["artwork_id"], name: "index_comments_on_artwork_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "value",        null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "votable_id",   null: false
    t.string   "votable_type", null: false
    t.index ["user_id"], name: "index_votes_on_user_id", using: :btree
    t.index ["votable_type", "votable_id"], name: "index_votes_on_votable_type_and_votable_id", using: :btree
  end

end
