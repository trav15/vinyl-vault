require 'test_helper'

class RecordControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get record_index_url
    assert_response :success
  end

  test "should get create" do
    get record_create_url
    assert_response :success
  end

  test "should get update" do
    get record_update_url
    assert_response :success
  end

  test "should get destroy" do
    get record_destroy_url
    assert_response :success
  end

end
