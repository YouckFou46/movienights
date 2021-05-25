# frozen_string_literal: true

class AddUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
    end
  end
end
